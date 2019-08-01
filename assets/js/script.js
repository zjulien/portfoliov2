// Formulaire

// Variable 

form = document.querySelector('form');



form.addEventListener('submit', function(){
    elements = form.elements; // selection de tout les éléments du formulaire est dedans, meme le bouton
    
    for(let item of elements) {
        if ( !item.validity.valid) {
            item.classList.add('error');
            spanMsg = document.querySelector('label[for="'+item.getAttribute('id')+'"] span.msg-error');
            spanMsg.classList.add('msg-error--show');
            event.preventDefault();
        }
    }
});


    elements = form.elements; // selection de tout les éléments du formulaire est dedans, meme le bouton
    
    for(let item of elements) {

        item.addEventListener('blur', function() {

            this.classList.remove('error');
            spanMsg = document.querySelector('label[for="'+this.getAttribute('id')+'"] span.msg-error');
            spanMsg.classList.remove('msg-error--show');    

        if ( !this.validity.valid) {
            this.classList.add('error');
            spanMsg.classList.add('msg-error--show');
        }
    });
}
// fin formulaire

///////// section sign up
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var shapes = [];
var num = 30;

var staticXpos;
var staticYpos;

var opt = {
  shapecolor: "#666",
  radius: 2,
  distance: 200,
  circleopacity: 1,
  speed: .5
};

var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;
addEventListener('resize', function() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});
//helper functions
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function clearcanvas() {
  ctx.clearRect(0, 0, w, h);
}

function getCords(e) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function createShapes(Xpos, Ypos) {
  this.x = Xpos ? Xpos : random(0, w);
  this.y = Ypos ? Ypos : random(0, h);
  this.speed = opt.speed;
  this.vx = Math.cos(random(0, 360)) * this.speed;
  this.vy = Math.sin(random(0, 360)) * this.speed;
  this.r = opt.radius;
  this.color = opt.shapecolor;
  this.opacity = opt.circleopacity;
  this.draw = function() {
    ctx.beginPath();
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = this.opacity;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();

  };
  this.move = function() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x >= w || this.x <= 0) {
      this.vx *= -1;
    }
    if (this.y >= h || this.y <= 0) {
      this.vy *= -1;
    }
    this.x > w ? this.x = w : this.x;
    this.y > h ? this.y = h : this.y;
    this.x < 0 ? this.x = 0 : this.x;
    this.y < 0 ? this.y = 0 : this.y;
  };
}

function check(point1, rest) {
  for (var j = 0; j < rest.length; j++) {
    var yd = point1.y - rest[j].y;
    var xd = point1.x - rest[j].x;
    var d = Math.sqrt(xd * xd + yd * yd);
    if (d < opt.distance) {
      ctx.beginPath();
      ctx.globalAlpha = (1 - (d / opt.distance));
      ctx.globalCompositeOperation = 'destination-over';
      ctx.lineWidth = 1;
      ctx.moveTo(point1.x, point1.y);
      ctx.lineTo(rest[j].x, rest[j].y);
      ctx.strokeStyle = opt.shapecolor;
      ctx.lineCap = "round";
      ctx.closePath();
      ctx.stroke();
    }
  }
}

function loop() {
  clearcanvas();
  shapes[0].x = staticXpos;
  shapes[0].y = staticYpos;
  shapes[0].move();
  shapes[0].draw();
  for (var i = 1; i < shapes.length; i++) {
    shapes[i].move();
    shapes[i].draw();
    check(shapes[i], shapes);
  }
  window.requestAnimationFrame(loop);
}

function init() {
  for (var i = 0; i < num; i++) {
    shapes.push(new createShapes());
  }
  window.requestAnimationFrame(loop);
}

//events
canvas.addEventListener('mousemove', function(e) {
  var pos = getCords(e);
  staticXpos = pos.x;
  staticYpos = pos.y;
});
canvas.addEventListener('click', function(e) {
  var pos = getCords(e);
  shapes.push(new createShapes(pos.x, pos.y));
});
canvas.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  shapes.splice(shapes.length - 1, 1);
});

init();


/////////fin section sign up





// scroll expérience
(function ($) { 

    /* Scroll Reveak de la Timeline */
    
        window.sr = ScrollReveal();
    
        if ($(window).width() < 768) {
    
            if ($('.timeline-content').hasClass('js--fadeInLeft')) {
                $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
            }
    
            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
    
        } else {
    
            sr.reveal('.js--fadeInLeft', {
                origin: 'left',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
    
            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
    
        }
    
        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
    
        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
    }(jQuery));
    //fin scroll expérience

        ///projet
        var camera, scene, renderer,
        geometry, material, mesh;
     
    init();
    animate(); 
    
    function init() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    
        clock = new THREE.Clock();
    
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
    
        scene = new THREE.Scene();
     
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;
        scene.add( camera );
     
        geometry = new THREE.CubeGeometry( 200, 200, 200 );
        material = new THREE.MeshLambertMaterial( { color: 0xaa6666, wireframe: false } );
        mesh = new THREE.Mesh( geometry, material );
        //scene.add( mesh );
        cubeSineDriver = 0;
     
        textGeo = new THREE.PlaneGeometry(300,300);
        THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
        textTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/quickText.png');
        textMaterial = new THREE.MeshLambertMaterial({color: 0x00ffff, opacity: 1, map: textTexture, transparent: true, blending: THREE.AdditiveBlending})
        text = new THREE.Mesh(textGeo,textMaterial);
        text.position.z = 800;
        scene.add(text);
    
        light = new THREE.DirectionalLight(0xffffff,0.5);
        light.position.set(-1,0,1);
        scene.add(light);
      
        smokeTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
        smokeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, map: smokeTexture, transparent: true});
        smokeGeo = new THREE.PlaneGeometry(300,300);
        smokeParticles = [];
    
    
        for (p = 0; p < 150; p++) {
            var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
            particle.position.set(Math.random()*500-250,Math.random()*500-250,Math.random()*1000-100);
            particle.rotation.z = Math.random() * 360;
            scene.add(particle);
            smokeParticles.push(particle);
        }
     
        document.body.appendChild( renderer.domElement );
     
    }
     
    function animate() {
     
        // note: three.js includes requestAnimationFrame shim
        stats.begin();
        delta = clock.getDelta();
        requestAnimationFrame( animate );
        evolveSmoke();
        render();
        stats.end();
    }
     
    function evolveSmoke() {
        var sp = smokeParticles.length;
        while(sp--) {
            smokeParticles[sp].rotation.z += (delta * 0.2);
        }
    }
    
    function render() {
     
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.01;
        cubeSineDriver += .01;
        mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
        renderer.render( scene, camera );
     
    }
    
    
    
    
    
    
    