/**
 * Repo: https://github.com/Zedruc/aio.js
 * 
 * Standard position style: absolute
 * Standard left style: 0px
 * Standard bottom style: 0px
 */

function aio() {
    const self = {
        get: (URL) => {
            fetch(URL, {
                method: 'GET'
            })
                .then(res => res.json())
                .then(data => console.log(data));
        },
        post: (URL, body) => {
            fetch(URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('[aio] Success:', data);
                })
                .catch((error) => {
                    console.error('[aio] Error:', error);
                });
        },

        put: (URL, body) => {
            fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('[aio] Success:', data);
                })
                .catch((error) => {
                    console.error('[aio] Error:', error);
                });
        }
    }
    return self;
}

function aioStyling(selector) {
    if (typeof (selector) !== "string") {
        throw new TypeError("[aio] selector must be type of string");
    }
    const self = {
        element: document.querySelector(/*Element*/selector),
        slideX: (pixel, duration) => {

            // Transition doesn't work on first run
            // please help

            self.element.style.transition = "all " + duration + "ms";
            let styling = self.element.style.left;
            let position = self.element.style.position;
            if (styling && position) {
                let curr_pos = parseInt(self.element.style.left, 10);
                self.element.style.left = parseInt(curr_pos) + pixel + "px";
            } else {
                console.log("else");
                self.element.style.left = 0 + "px";
                self.element.style.position = "relative";
                let curr_pos = parseInt(self.element.style.left, 10);
                self.element.style.left = parseInt(curr_pos) + pixel + "px";
            }
        },

        slideY: (pixel, duration) => {

            self.element.style.transition = "all " + duration + "ms";
            let styling = self.element.style.bottom;
            let position = self.element.style.position;
            if (styling && position) {
                let curr_pos = parseInt(self.element.style.left, 10);
                self.element.style.bottom = parseInt(curr_pos) + pixel + "px";
            } else {
                console.log("else");
                self.element.style.bottom = 0 + "px";
                self.element.style.position = "relative";
                let curr_pos = parseInt(self.element.style.left, 10);
                self.element.style.bottom = parseInt(curr_pos) + pixel + "px";
            }
        },

        hide: (duration) => {
            self.element.style.transition = "all " + duration + "ms";
            setTimeout(() => {
                self.element.style.display = "none";
            }, duration);
        },

        show: (duration) => {
            self.element.style.transition = "all " + duration + "ms";
            console.log("all " + duration + "ms");
            setTimeout(() => {
                self.element.style.display = "inline";
            }, duration);
        }
    }
    return self;
}