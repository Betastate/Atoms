

window.addEventListener("load", () => {
    const canvas = document.getElementById('canvas')

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    const atoms = [];

    for (let i = 0; i < 1000; i++) {
        atoms.push({
            x: Math.random() * width,
            y: Math.random() * height,
            xSpeed: 0,
            ySpeed: 0
        })
    }



    const update = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        atoms.forEach(atom => {
            atoms.forEach(innerAtom => {
                if (atom === innerAtom) {
                    return;
                }
                attract(atom, innerAtom);
                collide(atom, innerAtom);
            })
        })

        atoms.forEach(atom => move(atom))

        draw();
        window.requestAnimationFrame(update);
    }

    const draw = () => {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, width, height);


        ctx.fillStyle = '#fff';
        atoms.forEach(atom => {
            ctx.fillRect(atom.x, atom.y, 1, 1);

        })
    }

    update();
})