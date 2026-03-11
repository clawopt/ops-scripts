import os

CATEGORIES = [
    "CI_CD",
    "Web服务器",
    "其他",
    "内网穿透",
    "容器",
    "数据库",
    "监控运维",
    "面板工具"
]

TEMPLATE = """name: {category} Check

on:
  push:
    paths:
      - '{category}/**'
  pull_request:
    paths:
      - '{category}/**'

jobs:
  shellcheck:
    name: Shellcheck
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run ShellCheck
        uses: ludeeus/action-shellcheck@master
        with:
          scandir: './{category}'
"""

def main():
    os.makedirs(".github/workflows", exist_ok=True)
    for category in CATEGORIES:
        # Github workflows file names should usually be ascii, 
        # but modern github supports utf-8. To be safe, let's map or just use it.
        # Ideally we should transliterate, but for now let's try using the category name 
        # or a safe identifier if it fails.
        # Let's map known categories to English for filenames to be safe.
        safe_name = category.replace("/", "_")
        filename = f".github/workflows/{safe_name}.yml"
        
        with open(filename, "w", encoding="utf-8") as f:
            f.write(TEMPLATE.format(category=category))
        print(f"Generated {filename}")

if __name__ == "__main__":
    main()
