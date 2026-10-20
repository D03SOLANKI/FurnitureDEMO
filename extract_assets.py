import urllib.request
import re

url = 'https://graft.framer.website/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8')

scripts = re.findall(r'<script[^>]*src=[\'"]([^\'"]+)[\'"]', html)
print(f"Scripts found: {len(scripts)}")
all_images = set()

for s in scripts:
    try:
        s_req = urllib.request.Request(s, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(s_req) as s_resp:
            content = s_resp.read().decode('utf-8', errors='ignore')
            imgs = re.findall(r'https://framerusercontent\.com/images/[a-zA-Z0-9_\-]+\.(?:jpg|jpeg|png|webp)', content)
            for img in imgs:
                all_images.add(img)
    except Exception as e:
        pass

print(f"Total unique images found: {len(all_images)}")
with open('images_list.txt', 'w') as f:
    for img in sorted(all_images):
        f.write(img + '\n')
        print(img)
