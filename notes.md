## Image derivatives

Moscon images for item pages:
- thumbs 300px height, id + "_th.jpg"
- sm 800px height, id + "_sm.jpg" 

Create images from PDFs using ImageMagick ([setup instructions](https://evanwill.github.io/_drafts/notes/imagemagick.html)).
Set up folder with all PDFs with new filenames.
Create the small images:

`for f in *.pdf; do magick -density 500 "$f"[0] -resize 800x800 -flatten "small/${f%.pdf}_sm.jpg"; done`

Then `cd small`, and create thumbs from the smalls: 

`for f in *.jpg; do magick "$f" -resize x300 -flatten "../thumbs/${f%_sm.jpg}_th.jpg"; done`
