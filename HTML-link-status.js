<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Link Status Indicator</title>
    <style>
        .link-ok { color: green; }
        .link-broken { color: red; }
    </style>
</head>
<body>
    <a href="https://example.com" class="dynamic-link">Check Example</a>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const links = document.querySelectorAll('.dynamic-link');
            links.forEach(link => {
                fetch(link.href, { method: 'HEAD' })
                    .then(response => {
                        if (response.ok) {
                            link.classList.add('link-ok');
                            link.insertAdjacentHTML('afterend', '<span class="link-ok"> ✔</span>');
                        } else {
                            link.classList.add('link-broken');
                            link.insertAdjacentHTML('afterend', '<span class="link-broken"> ✖</span>');
                        }
                    })
                    .catch(() => {
                        link.classList.add('link-broken');
                        link.insertAdjacentHTML('afterend', '<span class="link-broken"> ✖</span>');
                    });
            });
        });
    </script>
  </body>
</html>