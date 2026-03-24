import * as THREE from 'three'

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x111118)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
scene.add(ambientLight)

const dirLight = new THREE.DirectionalLight(0xffffff, 1.8)
dirLight.position.set(5, 10, 7)
scene.add(dirLight)

const cubeColors = [0xf8909c, 0xfba4b0, 0xfebdc8, 0xf8988b, 0xffaa86, 0xfeec85, 0xff9e70, 0x6fcfbf, 0xff967c, 0xfc8faa, 0xe685a4, 0xad8ed6, 0xb1bed6, 0x9ec3d4, 0x7091ca, 0x7699db, 0x9adcf0, 0x84e4d8, 0xa1e9d7, 0xa3e28c, 0xe9eb7f]
const numberOfShapes = 200

function bricks() {
  const shapes = []

  for (let n = 0; n < numberOfShapes; n++) {
    const geometry = new THREE.BoxGeometry(0.5 * Math.random(), 0.5 * Math.random(), 0.5 * Math.random())
    const material = new THREE.MeshLambertMaterial({ color: cubeColors[Math.floor(Math.random() * cubeColors.length)] })
    shapes[n] = new THREE.Mesh(geometry, material)

    shapes[n].castShadow = true

    shapes[n].translateX(7 * (Math.random() - 0.5))
    shapes[n].translateZ(7 * (Math.random() - 0.5))
    shapes[n].translateY(20 + 7 * (Math.random() - 0.5))
    shapes[n].drift = 0.02 * (Math.random() - 0.5)

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
      shapes[n].position.x += shapes[n].drift
    }
  }

  render()
}

bricks()
document.querySelector('.trigger').addEventListener('click', bricks)
