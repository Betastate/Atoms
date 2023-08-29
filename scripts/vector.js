const gravityMult = 0.000001;
const bounceMult = 0.1;

function getDistance(atom1, atom2) {
    return Math.sqrt(Math.pow((atom1.x - atom2.x), 2) + Math.pow((atom1.y - atom2.y), 2));
}

function attract(atom1, atom2) {
    let distance = getDistance(atom1, atom2)

    let dir1 = {
        x: (atom2.x - atom1.x) / distance,
        y: (atom2.y - atom1.y) / distance
    }
    let dir2 = {
        x: (atom1.x - atom2.x) / distance,
        y: (atom1.y - atom2.y) / distance
    }

    //Apply force to speed

    atom1.xSpeed += dir1.x * Math.sqrt(distance) * gravityMult;
    atom1.ySpeed += dir1.y * Math.sqrt(distance) * gravityMult;

    atom2.xSpeed += dir2.x * Math.sqrt(distance) * gravityMult;
    atom2.ySpeed += dir2.y * Math.sqrt(distance) * gravityMult;
}

function collide(atom1, atom2) {
    let distance = getDistance(atom1, atom2);
    if (distance < 1) {
        let dir1 = {
            x: (atom2.x - atom1.x) / distance,
            y: (atom2.y - atom1.y) / distance
        }
        let dir2 = {
            x: (atom1.x - atom2.x) / distance,
            y: (atom1.y - atom2.y) / distance
        }


        //Apply repel force to speed

        atom1.xSpeed -= dir1.x * bounceMult;
        atom1.ySpeed -= dir1.y * bounceMult;

        atom2.xSpeed -= dir2.x * bounceMult;
        atom2.ySpeed -= dir2.y * bounceMult;
    }
}

function move(atom) {
    atom.x += atom.xSpeed;
    atom.y += atom.ySpeed;
}