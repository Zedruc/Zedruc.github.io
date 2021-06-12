function checkSupported() {
    canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        // Canvas is supported

        // This sets the fill color to red
        ctx.fillStyle = "rgb(200,0,0)";

        // This sets some variables for demonstration purposes
        var x = 50;
        var y = 50;
        var width = 10;
        var height = 10;

        // This draws a square with the parameters from the variables set above
        ctx.fillRect(x, y, width, height);

        // The current position of the Snake's head, as xy coordinates
        this.currentPosition = [50, 50];

        // Sets the grid dimensions as one value
        this.gridSize = 10;

        this.moveUp = () => {
            ctx.fillRect(this.currentPosition[0], this.currentPosition[1] - this.gridSize, width, height);
            this.currentPosition[1] -= this.gridSize;
        }

        this.moveDown = () => {
            ctx.fillRect(this.currentPosition[0], this.currentPosition[1] + this.gridSize, width, height);
            this.currentPosition[1] += this.gridSize;
        }

        this.moveRight = () => {
            ctx.fillRect(this.currentPosition[0] + this.gridSize, this.currentPosition[1], width, height);
            this.currentPosition[0] += this.gridSize;
        }


        this.moveLeft = () => {
            ctx.fillRect(this.currentPosition[0] - this.gridSize, this.currentPosition[1], width, height);
            this.currentPosition[0] -= this.gridSize;
        }

        document.addEventListener('keydown', (ev) => {
            console.log(ev);
            var keyCode = ev.keyCode;
            switch (keyCode) {
                case 38:
                    this.moveUp();
                    break;

                case 39:
                    this.moveRight();

                case 40:
                    this.moveDown();

                case 37:
                    this.moveLeft();

                default:
                    break;
            }
        });

    } else {
        // Canvas is not supported
        alert("Snake animation can not play since your browser does not support canvas.");
    }
}