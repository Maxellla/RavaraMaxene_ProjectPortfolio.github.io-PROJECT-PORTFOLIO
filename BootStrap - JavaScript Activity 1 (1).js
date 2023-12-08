<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-4">
        <div class="progress">
            <div id="progress-bar" class="progress-bar" role="progressbar" style="width: 0%;">0%</div>
        </div>
    </div>

    <div class="container mt-2">
        <button class="btn btn-primary" onclick="setProgressBarWidth(33)">Set to 33%</button>
        <button class="btn btn-primary" onclick="setProgressBarWidth(66)">Set to 66%</button>
        <button class="btn btn-primary" onclick="setProgressBarWidth(100)">Set to 100%</button>
    </div>

    <script>
        function setProgressBarWidth(width) {
            const progressBar = document.getElementById('progress-bar');
            progressBar.style.width = width + '%';
            progressBar.innerText = width + '%';
        }
    </script>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>