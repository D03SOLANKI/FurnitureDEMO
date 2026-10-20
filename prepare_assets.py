from PIL import Image
import os

img = Image.open('graft_full.png')
w, h = img.size
print(f"Full image dimensions: {w} x {h}")

out_dir = r'd:\FurnitureDemo\app\public\assets'
os.makedirs(out_dir, exist_ok=True)

# 1. Hero background (top hero section from y=0 to y=890)
hero = img.crop((0, 0, 1440, 890))
hero.save(os.path.join(out_dir, 'hero-bg.jpg'), quality=92)

# 2. Hero Onda chair preview card
onda_card = img.crop((1240, 520, 1390, 670))
onda_card.save(os.path.join(out_dir, 'onda-preview.png'))

# 3. Product Catalog (Section 03, around y=1900 to y=2900)
# Let's crop Toma Cabinet, Riva Lamp, Alden Chair
# Toma Cabinet: ~x=50, y=2000, w=370, h=470
# Riva Lamp: ~x=446, y=2000, w=370, h=470
# Alden Chair: ~x=840, y=2000, w=550, h=720
toma = img.crop((50, 2012, 420, 2482))
toma.save(os.path.join(out_dir, 'toma-cabinet.jpg'), quality=95)

riva = img.crop((446, 2012, 816, 2482))
riva.save(os.path.join(out_dir, 'riva-lamp.jpg'), quality=95)

alden = img.crop((842, 2012, 1390, 2732))
alden.save(os.path.join(out_dir, 'alden-chair.jpg'), quality=95)

# 4. Onda Spotlight views (y=3000 to y=6500)
onda_hero = img.crop((0, 2900, 1440, 3600))
onda_hero.save(os.path.join(out_dir, 'onda-wood-curve.jpg'), quality=92)

onda_1 = img.crop((733, 3550, 1390, 4200))
onda_1.save(os.path.join(out_dir, 'onda-view-1.jpg'), quality=95)

onda_2 = img.crop((733, 4280, 1390, 4930))
onda_2.save(os.path.join(out_dir, 'onda-view-2.jpg'), quality=95)

onda_3 = img.crop((733, 5010, 1390, 5660))
onda_3.save(os.path.join(out_dir, 'onda-view-3.jpg'), quality=95)

onda_4 = img.crop((733, 5740, 1390, 6390))
onda_4.save(os.path.join(out_dir, 'onda-view-4.jpg'), quality=95)

# 5. Project 1: Furnishing 30 sqm loft (y=6600 to y=7800)
proj1_thumb = img.crop((50, 7120, 360, 7570))
proj1_thumb.save(os.path.join(out_dir, 'project-loft-kitchen.jpg'), quality=95)

proj1_main = img.crop((720, 6800, 1390, 7650))
proj1_main.save(os.path.join(out_dir, 'project-loft-main.jpg'), quality=95)

# 6. Project 2: Compact family loft (y=7800 to y=9000)
proj2_thumb = img.crop((50, 8800, 360, 9250))
proj2_thumb.save(os.path.join(out_dir, 'project-family-kitchen.jpg'), quality=95)

proj2_main = img.crop((720, 8470, 1390, 9320))
proj2_main.save(os.path.join(out_dir, 'project-family-main.jpg'), quality=95)

# 7. Project 3: Warm minimal bedroom (y=9400 to y=10600)
proj3_thumb = img.crop((50, 10450, 360, 10900))
proj3_thumb.save(os.path.join(out_dir, 'project-bedroom-wardrobe.jpg'), quality=95)

proj3_main = img.crop((720, 10130, 1390, 10980))
proj3_main.save(os.path.join(out_dir, 'project-bedroom-main.jpg'), quality=95)

# 8. Artisan Workshop / How we work (y=11200 to y=12500)
workshop_hands = img.crop((50, 11400, 720, 12050))
workshop_hands.save(os.path.join(out_dir, 'craft-hands.jpg'), quality=95)

# 9. Testimonials Wood sculpture (y=12200 to y=13400)
sculpture = img.crop((0, 12350, 1440, 13350))
sculpture.save(os.path.join(out_dir, 'sculpture-wood.jpg'), quality=95)

# 10. Team portraits (y=13800 to y=14700)
erik = img.crop((50, 14000, 370, 14530))
erik.save(os.path.join(out_dir, 'team-erik.jpg'), quality=95)

maja = img.crop((390, 14000, 710, 14530))
maja.save(os.path.join(out_dir, 'team-maja.jpg'), quality=95)

anton = img.crop((730, 14000, 1050, 14530))
anton.save(os.path.join(out_dir, 'team-anton.jpg'), quality=95)

lint = img.crop((1070, 14000, 1390, 14530))
lint.save(os.path.join(out_dir, 'team-lint.jpg'), quality=95)

# 11. Craft moodboard (y=14600 to y=15600)
mood_1 = img.crop((50, 14750, 360, 15070))
mood_1.save(os.path.join(out_dir, 'mood-bandsaw.jpg'), quality=95)

mood_2 = img.crop((390, 14750, 700, 15070))
mood_2.save(os.path.join(out_dir, 'mood-woodgrain.jpg'), quality=95)

mood_3 = img.crop((1080, 14750, 1390, 15070))
mood_3.save(os.path.join(out_dir, 'mood-sketch.jpg'), quality=95)

mood_4 = img.crop((390, 15110, 700, 15430))
mood_4.save(os.path.join(out_dir, 'mood-driftwood.jpg'), quality=95)

mood_5 = img.crop((730, 15110, 1040, 15430))
mood_5.save(os.path.join(out_dir, 'mood-chairdetail.jpg'), quality=95)

# 12. Contact background
contact_bg = img.crop((0, 15500, 1440, 16300))
contact_bg.save(os.path.join(out_dir, 'contact-bg.jpg'), quality=92)

# 13. Social hub images (y=16400 to y=17000)
social_1 = img.crop((50, 16650, 365, 16960))
social_1.save(os.path.join(out_dir, 'social-1.jpg'), quality=95)

social_2 = img.crop((390, 16650, 705, 16960))
social_2.save(os.path.join(out_dir, 'social-2.jpg'), quality=95)

social_3 = img.crop((730, 16650, 1045, 16960))
social_3.save(os.path.join(out_dir, 'social-3.jpg'), quality=95)

social_4 = img.crop((1070, 16650, 1385, 16960))
social_4.save(os.path.join(out_dir, 'social-4.jpg'), quality=95)

# 14. Category thumbnails from scroll_step_1.png
if os.path.exists('scroll_step_1.png'):
    s1 = Image.open('scroll_step_1.png')
    # Sofas thumb
    t_sofa = s1.crop((785, 120, 895, 215))
    t_sofa.save(os.path.join(out_dir, 'cat-sofas.jpg'), quality=95)
    
    # Sidetables pill
    t_side = s1.crop((420, 230, 580, 325))
    t_side.save(os.path.join(out_dir, 'cat-sidetables.jpg'), quality=95)
    
    # Tables pill
    t_tab = s1.crop((770, 455, 955, 545))
    t_tab.save(os.path.join(out_dir, 'cat-tables.jpg'), quality=95)
    
    # Beds circle
    t_bed = s1.crop((565, 678, 645, 762))
    t_bed.save(os.path.join(out_dir, 'cat-beds.jpg'), quality=95)

print("All primary assets extracted successfully into app/public/assets!")

