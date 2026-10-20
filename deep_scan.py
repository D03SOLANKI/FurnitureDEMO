import re
import urllib.request

with open(r'C:\Users\DEV SOLANKI\.gemini\antigravity\brain\fad666b7-8c2c-48b9-9092-c96ef79b96a8\.system_generated\steps\86\content.md', 'r', encoding='utf-8') as f:
    text = f.read()

# find script tags and modulepreload
scripts = re.findall(r'href=[\'"]([^\'"]+\.mjs)[\'"]', text) + re.findall(r'src=[\'"]([^\'"]+\.mjs)[\'"]', text)
print("Modules found in html:", scripts)

all_images = set()
visited_modules = set()

def scan_module(url):
    if url in visited_modules or len(visited_modules) > 40:
        return
    visited_modules.add(url)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            code = resp.read().decode('utf-8', errors='ignore')
            # find images
            imgs = re.findall(r'https://framerusercontent\.com/images/[a-zA-Z0-9_\-]+\.(?:jpg|jpeg|png|webp)', code)
            for img in imgs:
                all_images.add(img)
            # find next modules
            sub_mods = re.findall(r'https://framerusercontent\.com/[^\s\'"()]+\.mjs', code)
            for sm in sub_mods:
                scan_module(sm)
    except Exception as e:
        print("Err:", e)

for s in scripts:
    scan_module(s)

print(f"Total images discovered: {len(all_images)}")
with open('all_images.txt', 'w') as f:
    for img in sorted(all_images):
        f.write(img + '\n')
        print(img)
