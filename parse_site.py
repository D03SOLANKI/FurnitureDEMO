import re
import json

with open(r'C:\Users\DEV SOLANKI\.gemini\antigravity\brain\fad666b7-8c2c-48b9-9092-c96ef79b96a8\.system_generated\steps\86\content.md', 'r', encoding='utf-8') as f:
    text = f.read()

# find all framerusercontent urls
urls = set(re.findall(r'https://framerusercontent\.com/[^\s"\'<>)]+', text))
print("Found URLs:", len(urls))
for u in sorted(urls):
    if any(ext in u for ext in ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.json', '.mjs', '.js']):
        print(u)
