import glob
import os
from PIL import Image

out_dir = r'd:\FurnitureDemo\app\public\assets'

# Let's inspect the files in clean_assets and their dimensions / characteristics
clean_files = sorted(glob.glob('clean_assets/*'))
print(f"Total clean files: {len(clean_files)}")

# Let's find specific files:
# Toma Cabinet, Riva Lamp, Alden Chair:
# Alden chair is tall aspect ~1708x2238 (KUB4qb2mZH2vR5p6DrSdg6x5zls.png)
if os.path.exists('clean_assets/KUB4qb2mZH2vR5p6DrSdg6x5zls.png'):
    import shutil
    shutil.copy('clean_assets/KUB4qb2mZH2vR5p6DrSdg6x5zls.png', os.path.join(out_dir, 'alden-chair.jpg'))
    print("Found clean Alden chair!")

# Category thumbnails:
# 2DdKq8fx45euurtW4hUkH3LoauE.png (404, 300) -> pill
# BcPAqEw2WcmFxgdCAMvnI6U0vis.png (596, 300) -> pill
# DpwD2olDhPkaKXDHCr88sNgh4E.png (700, 300) -> pill
# S328tViJXhBfucI0e5BMIcIdqg.png (312, 312) -> circle (beds!)
for f in clean_files:
    im = Image.open(f)
    w, h = im.size
    base = os.path.basename(f)
    if (w, h) == (312, 312):
        im.convert('RGB').save(os.path.join(out_dir, 'cat-beds.jpg'), quality=95)
        print(f"Mapped {base} to cat-beds.jpg")
    elif (w, h) == (404, 300):
        im.convert('RGB').save(os.path.join(out_dir, 'cat-sofas.jpg'), quality=95)
        print(f"Mapped {base} to cat-sofas.jpg")
    elif (w, h) == (596, 300):
        im.convert('RGB').save(os.path.join(out_dir, 'cat-sidetables.jpg'), quality=95)
        print(f"Mapped {base} to cat-sidetables.jpg")
    elif (w, h) == (700, 300):
        im.convert('RGB').save(os.path.join(out_dir, 'cat-tables.jpg'), quality=95)
        print(f"Mapped {base} to cat-tables.jpg")

# 4 team members: 514x584 or 538x648
team_files = [f for f in clean_files if Image.open(f).size in [(514, 584), (538, 648)]]
print("Team candidates:", len(team_files))
if len(team_files) >= 4:
    import shutil
    shutil.copy(team_files[0], os.path.join(out_dir, 'team-erik.jpg'))
    shutil.copy(team_files[1], os.path.join(out_dir, 'team-maja.jpg'))
    shutil.copy(team_files[2], os.path.join(out_dir, 'team-anton.jpg'))
    shutil.copy(team_files[3], os.path.join(out_dir, 'team-lint.jpg'))
    print("Mapped 4 team members from clean source!")

print("Assets mapping completed!")
