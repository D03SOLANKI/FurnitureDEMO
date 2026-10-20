import re

with open(r'C:\Users\DEV SOLANKI\.gemini\antigravity\brain\fad666b7-8c2c-48b9-9092-c96ef79b96a8\.system_generated\steps\86\content.md', 'r', encoding='utf-8') as f:
    text = f.read()

scripts = re.findall(r'<script[^>]*src=[\'"]([^\'"]+)[\'"]', text)
print("Scripts:", scripts)

# also search for any framerusercontent url
framer_urls = set(re.findall(r'https://[a-zA-Z0-9_\-\./]+\.framerusercontent\.com/[^\s\'"<>)]+', text) + re.findall(r'https://framerusercontent\.com/[^\s\'"<>)]+', text))
for u in sorted(framer_urls):
    print("FU:", u[:100])
