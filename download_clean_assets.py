import urllib.request
import re
import os

req = urllib.request.Request('https://graft.framer.website/', headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8')

imgs = set(re.findall(r'https://framerusercontent\.com/images/[a-zA-Z0-9_\-]+\.(?:jpg|jpeg|png|webp)', html))
os.makedirs('clean_assets', exist_ok=True)

print(f"Downloading {len(imgs)} images...")
for u in imgs:
    fn = u.split('/')[-1]
    path = os.path.join('clean_assets', fn)
    if not os.path.exists(path):
        try:
            r = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(r) as resp, open(path, 'wb') as f:
                f.write(resp.read())
        except Exception as e:
            print(f"Error downloading {u}: {e}")

print("Downloaded all clean assets!")
