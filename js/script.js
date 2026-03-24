import * as THREE from 'three'

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

const light = new THREE.AmbientLight(0xbadce6)
scene.add(light)

const cubeColors = [0xe63f52, 0xf36279, 0xfc92a4, 0xe74c39, 0xff6d37, 0xfbe446, 0xff5200, 0x00ae8e, 0xff4814, 0xf4436d, 0xcd3363, 0x773dbe, 0x8d9ebd, 0x69a3b9, 0x003595, 0x0047bb, 0x54c9e8, 0x30d9c4, 0x75e1c2, 0x71d54c, 0xe3e836]
const numberOfShapes = 200

function bricks() {
  const shapes = []

  for (let n = 0; n < numberOfShapes; n++) {
    const geometry = new THREE.BoxGeometry(0.5 * Math.random(), 0.5 * Math.random(), 0.5 * Math.random())
    const material = new THREE.MeshBasicMaterial({ color: cubeColors[Math.floor(Math.random() * cubeColors.length)] })
    shapes[n] = new THREE.Mesh(geometry, material)

    shapes[n].castShadow = true

    shapes[n].translateX(7 * (Math.random() - 0.5))
    shapes[n].translateZ(7 * (Math.random() - 0.5))
    shapes[n].translateY(20 + 7 * (Math.random() - 0.5))

    scene.add(shapes[n])
  }

  const render = () => {
    requestAnimationFrame(render)
    renderer.render(scene, camera)
    for (let n = 0; n < numberOfShapes; n++) {
      shapes[n].rotation.x += 0.01 * Math.random() + 0.01 * n
      shapes[n].rotation.y += 0.02 * Math.random() + 0.01 * n
      shapes[n].rotation.z += 0.01 * Math.random() + 0.01 * n
      shapes[n].position.y -= 0.04 * Math.random() + 0.01 * n
      shapes[n].position.x -= 0.02 * (Math.random() - 0.5)
    }
  }

  render()
}

document.body.addEventListener('click', bricks)
