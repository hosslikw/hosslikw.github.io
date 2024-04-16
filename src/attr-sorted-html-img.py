import re
import os

def reorder_img_tags(file_path):
    print(f"Processing file: {file_path}")  # Log which file is being processed

    # Read the contents of the file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Define the regex pattern to capture src, alt, and style attributes in any order
    pattern = re.compile(r'<img\s+([^>]*\bsrc="[^"]*")[^>]*([^>]*\balt="[^"]*")[^>]*([^>]*\bstyle="[^"]*")[^>]*>', re.IGNORECASE)

    # Function to reorder attributes
    def reorder_attributes(match):
        return f'<img {match.group(1)} {match.group(2)} {match.group(3)}>'

    # Substitute found patterns with reordered attributes
    updated_content = pattern.sub(reorder_attributes, content)

    # Check if any changes were made
    if content != updated_content:
        print(f"Updating file: {file_path}")  # Log that the file is being updated
        # Write the updated content back to the file
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(updated_content)
    else:
        print(f"No changes needed for: {file_path}")  # Log if no changes were necessary

# Walk through all files in the directory and its subdirectories
for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith('.html'):  # Target HTML files, adjust if needed
            reorder_img_tags(os.path.join(root, file))

print("Attribute reordering complete.")