import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCcw, Eye, Sparkles } from 'lucide-react';

interface FinishOption {
  id: string;
  name: string;
  woodColor: string;
  fabricColor: string;
  roughness: number;
  metalness: number;
  desc: string;
}

const finishes: FinishOption[] = [
  {
    id: 'oak',
    name: 'Natural Matte Oak',
    woodColor: '#C8A37A',
    fabricColor: '#D8D3C8',
    roughness: 0.75,
    metalness: 0.05,
    desc: 'Hand-oiled solid European white oak with neutral boucle weave',
  },
  {
    id: 'walnut',
    name: 'Smoked Walnut',
    woodColor: '#4A3425',
    fabricColor: '#383533',
    roughness: 0.65,
    metalness: 0.08,
    desc: 'Deep smoked walnut finish paired with charcoal tailored wool',
  },
  {
    id: 'ash',
    name: 'Bleached Nordic Ash',
    woodColor: '#DFCFB8',
    fabricColor: '#ECE8DF',
    roughness: 0.8,
    metalness: 0.02,
    desc: 'Light Scandinavian ash with organic unbleached flax linen',
  },
  {
    id: 'cognac',
    name: 'Sienna Cognac Leather',
    woodColor: '#583D2A',
    fabricColor: '#93542B',
    roughness: 0.45,
    metalness: 0.12,
    desc: 'Aged Italian vegetable-tanned leather on espresso oak frame',
  },
];

export const Onda3DSpotlight: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedFinish, setSelectedFinish] = useState<FinishOption>(finishes[0]);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [activeTab, setActiveTab] = useState<'3d' | 'views'>('3d');
  const [selectedViewImg, setSelectedViewImg] = useState('/assets/onda-view-1.jpg');

  // References for Three.js instance
  const chairGroupRef = useRef<THREE.Group | null>(null);
  const woodMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const fabricMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 520;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#FAF9F6');

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 3.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfff6ea, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.2);
    mainLight.position.set(4, 6, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    mainLight.shadow.bias = -0.0005;
    scene.add(mainLight);

    const softFillLight = new THREE.DirectionalLight(0xd9e4ff, 0.8);
    softFillLight.position.set(-5, 3, -3);
    scene.add(softFillLight);

    const rimLight = new THREE.DirectionalLight(0xffecd2, 1.4);
    rimLight.position.set(0, 4, -5);
    scene.add(rimLight);

    // Floor Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(10, 10);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.15 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.85;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // Materials
    const woodMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(selectedFinish.woodColor),
      roughness: selectedFinish.roughness,
      metalness: selectedFinish.metalness,
    });
    woodMaterialRef.current = woodMat;

    const fabricMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(selectedFinish.fabricColor),
      roughness: 0.85,
      metalness: 0.02,
    });
    fabricMaterialRef.current = fabricMat;

    // Sculptural Onda Chair Geometry Assembly
    const chairGroup = new THREE.Group();
    chairGroupRef.current = chairGroup;

    // 1. Curved ergonomic seat cushion
    const seatGeo = new THREE.CylinderGeometry(0.72, 0.68, 0.14, 32);
    seatGeo.scale(1, 0.9, 1.05);
    const seat = new THREE.Mesh(seatGeo, fabricMat);
    seat.position.y = -0.15;
    seat.castShadow = true;
    seat.receiveShadow = true;
    chairGroup.add(seat);

    // 2. Sculptural Curved Backrest Shell (Bentwood outer)
    const shellGeo = new THREE.CylinderGeometry(0.78, 0.74, 0.55, 32, 1, true, -Math.PI * 0.75, Math.PI * 1.5);
    const shell = new THREE.Mesh(shellGeo, woodMat);
    shell.position.set(0, 0.18, 0.05);
    shell.castShadow = true;
    shell.receiveShadow = true;
    chairGroup.add(shell);

    // 3. Inner Padded Backrest Cushion
    const innerBackGeo = new THREE.CylinderGeometry(0.74, 0.71, 0.52, 32, 1, true, -Math.PI * 0.73, Math.PI * 1.46);
    const innerBack = new THREE.Mesh(innerBackGeo, fabricMat);
    innerBack.position.set(0, 0.18, 0.05);
    innerBack.scale.set(0.98, 0.98, 0.98);
    innerBack.castShadow = true;
    chairGroup.add(innerBack);

    // 4. Upper Sculptured Lip (Bent oak rim)
    const rimTorus = new THREE.TorusGeometry(0.76, 0.035, 16, 48, Math.PI * 1.5);
    const rimMesh = new THREE.Mesh(rimTorus, woodMat);
    rimMesh.rotation.x = Math.PI / 2;
    rimMesh.rotation.z = Math.PI * 0.25;
    rimMesh.position.set(0, 0.45, 0.05);
    rimMesh.castShadow = true;
    chairGroup.add(rimMesh);

    // 5. Four Tapered Architectural Solid Wood Legs
    const legGeo = new THREE.CylinderGeometry(0.032, 0.02, 0.78, 16);
    
    // Front-Left Leg
    const legFL = new THREE.Mesh(legGeo, woodMat);
    legFL.position.set(-0.46, -0.48, 0.42);
    legFL.rotation.z = -0.12;
    legFL.rotation.x = 0.12;
    legFL.castShadow = true;
    chairGroup.add(legFL);

    // Front-Right Leg
    const legFR = new THREE.Mesh(legGeo, woodMat);
    legFR.position.set(0.46, -0.48, 0.42);
    legFR.rotation.z = 0.12;
    legFR.rotation.x = 0.12;
    legFR.castShadow = true;
    chairGroup.add(legFR);

    // Back-Left Leg
    const legBL = new THREE.Mesh(legGeo, woodMat);
    legBL.position.set(-0.48, -0.48, -0.42);
    legBL.rotation.z = -0.14;
    legBL.rotation.x = -0.15;
    legBL.castShadow = true;
    chairGroup.add(legBL);

    // Back-Right Leg
    const legBR = new THREE.Mesh(legGeo, woodMat);
    legBR.position.set(0.48, -0.48, -0.42);
    legBR.rotation.z = 0.14;
    legBR.rotation.x = -0.15;
    legBR.castShadow = true;
    chairGroup.add(legBR);

    // Under-seat Cross Bracing
    const braceGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.92, 12);
    const brace1 = new THREE.Mesh(braceGeo, woodMat);
    brace1.rotation.z = Math.PI / 2;
    brace1.position.set(0, -0.24, 0.15);
    chairGroup.add(brace1);

    const brace2 = new THREE.Mesh(braceGeo, woodMat);
    brace2.rotation.z = Math.PI / 2;
    brace2.position.set(0, -0.24, -0.15);
    chairGroup.add(brace2);

    scene.add(chairGroup);

    // Mouse Drag Rotation
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsAutoRotating(false);
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !chairGroupRef.current) return;
      const deltaX = e.clientX - previousMouseX;
      const deltaY = e.clientY - previousMouseY;

      chairGroupRef.current.rotation.y += deltaX * 0.008;
      chairGroupRef.current.rotation.x = Math.max(
        -0.3,
        Math.min(0.4, chairGroupRef.current.rotation.x + deltaY * 0.005)
      );

      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch support for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsAutoRotating(false);
        previousMouseX = e.touches[0].clientX;
        previousMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !chairGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMouseX;
      const deltaY = e.touches[0].clientY - previousMouseY;

      chairGroupRef.current.rotation.y += deltaX * 0.008;
      chairGroupRef.current.rotation.x = Math.max(
        -0.3,
        Math.min(0.4, chairGroupRef.current.rotation.x + deltaY * 0.005)
      );

      previousMouseX = e.touches[0].clientX;
      previousMouseY = e.touches[0].clientY;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onMouseUp);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (isAutoRotating && chairGroupRef.current) {
        chairGroupRef.current.rotation.y += 0.004;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const newW = mountRef.current.clientWidth;
      const newH = mountRef.current.clientHeight || 520;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [isAutoRotating]);

  // Update materials when selectedFinish changes
  useEffect(() => {
    if (woodMaterialRef.current && fabricMaterialRef.current) {
      woodMaterialRef.current.color.set(selectedFinish.woodColor);
      woodMaterialRef.current.roughness = selectedFinish.roughness;
      woodMaterialRef.current.metalness = selectedFinish.metalness;

      fabricMaterialRef.current.color.set(selectedFinish.fabricColor);
    }
  }, [selectedFinish]);

  const resetCamera = () => {
    if (chairGroupRef.current) {
      chairGroupRef.current.rotation.set(0, 0, 0);
      setIsAutoRotating(true);
    }
  };

  const galleryViews = [
    { label: 'Front Angle', src: '/assets/onda-view-1.jpg' },
    { label: 'Silhouette', src: '/assets/onda-view-2.jpg' },
    { label: 'Top View', src: '/assets/onda-view-3.jpg' },
    { label: 'Joinery Detail', src: '/assets/onda-view-4.jpg' },
  ];

  return (
    <section
      id="spotlight"
      className="relative w-full bg-[#FAF9F6] text-[#392615] pt-16 pb-20 px-6 md:px-12 overflow-hidden border-t border-[#392615]/10"
    >
      <div className="max-w-[1620px] mx-auto">
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#956e4b] font-medium block mb-2">
              Featured · New Item
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight">
              Meet Onda chair
            </h2>
          </div>

          {/* Mode Switcher: 3D Model vs Editorial Photography */}
          <div className="flex items-center gap-2 bg-[#EFECE6] p-1.5 rounded-full self-start md:self-auto border border-[#392615]/10">
            <button
              onClick={() => setActiveTab('3d')}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === '3d'
                  ? 'bg-[#392615] text-white shadow-md'
                  : 'text-[#736557] hover:text-[#392615]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive 3D Canvas</span>
            </button>
            <button
              onClick={() => setActiveTab('views')}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'views'
                  ? 'bg-[#392615] text-white shadow-md'
                  : 'text-[#736557] hover:text-[#392615]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Studio Gallery</span>
            </button>
          </div>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left/Center Visual Canvas */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="relative w-full h-[450px] sm:h-[550px] md:h-[620px] rounded-3xl bg-white border border-[#392615]/10 shadow-sm overflow-hidden">
              {activeTab === '3d' ? (
                <>
                  {/* Three.js Canvas Container */}
                  <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

                  {/* 3D Interaction Control Overlay */}
                  <div className="absolute top-6 left-6 z-10 flex items-center gap-3">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wider bg-[#392615]/5 backdrop-blur-md text-[#392615] border border-[#392615]/10">
                      360° Orbit View · Drag to rotate
                    </span>
                  </div>

                  <div className="absolute top-6 right-6 z-10 flex items-center gap-2">
                    <button
                      onClick={resetCamera}
                      title="Reset View"
                      className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-[#392615]/15 flex items-center justify-center text-[#392615] hover:bg-[#392615] hover:text-white transition-colors cursor-pointer shadow-sm"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="absolute bottom-6 left-6 z-10">
                    <span className="text-xs text-[#736557] bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#392615]/10 shadow-sm">
                      Active: <strong className="text-[#392615]">{selectedFinish.name}</strong>
                    </span>
                  </div>
                </>
              ) : (
                /* Studio Photographic Gallery */
                <div className="w-full h-full relative group">
                  <img
                    src={selectedViewImg}
                    alt="Onda Chair Studio View"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-3 bg-white/80 backdrop-blur-md p-2 rounded-2xl border border-white/60 shadow-lg">
                    {galleryViews.map((view) => (
                      <button
                        key={view.src}
                        onClick={() => setSelectedViewImg(view.src)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                          selectedViewImg === view.src
                            ? 'bg-[#392615] text-white shadow-sm'
                            : 'text-[#736557] hover:text-[#392615]'
                        }`}
                      >
                        {view.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Material & Finish Swatch Selector */}
            <div className="p-6 rounded-2xl bg-white border border-[#392615]/10 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h4 className="font-display font-medium text-base text-[#392615]">
                    Select Material &amp; Hand-Finish
                  </h4>
                  <p className="text-xs text-[#736557]">{selectedFinish.desc}</p>
                </div>
                <span className="text-xs font-mono text-[#956e4b] bg-[#956e4b]/10 px-3 py-1 rounded-full self-start">
                  Real-time 3D Shader
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {finishes.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFinish(f)}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedFinish.id === f.id
                        ? 'border-[#956e4b] bg-[#956e4b]/5 shadow-sm ring-1 ring-[#956e4b]'
                        : 'border-[#392615]/10 hover:border-[#392615]/30 bg-transparent'
                    }`}
                  >
                    <div
                      className="w-7 h-7 rounded-full shrink-0 shadow-inner border border-black/15 flex items-center justify-center"
                      style={{ backgroundColor: f.woodColor }}
                    >
                      <div
                        className="w-3.5 h-3.5 rounded-full border border-black/10"
                        style={{ backgroundColor: f.fabricColor }}
                      />
                    </div>
                    <span className="text-xs font-medium leading-tight text-[#392615]">
                      {f.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Specifications */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="p-8 rounded-3xl bg-white border border-[#392615]/10 shadow-sm">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#736557] mb-3">
                about:
              </h3>
              <p className="text-sm text-[#392615] leading-relaxed mb-8 font-normal">
                A refined dining and lounge chair crafted from solid European oak, created to blend
                effortlessly into daily life. Gentle lines, balanced proportions, and a smooth
                hand-oiled finish emphasize the character of the wood and the clarity of the design.
              </p>

              <div className="space-y-4 border-t border-[#392615]/10 pt-6 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[#736557] font-mono text-xs uppercase">Dimensions:</span>
                  <span className="font-medium text-[#392615]">H 76 cm × W 52 cm × D 49 cm</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#736557] font-mono text-xs uppercase">Weight:</span>
                  <span className="font-medium text-[#392615]">4.2 kg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#736557] font-mono text-xs uppercase">Material:</span>
                  <span className="font-medium text-[#392615]">Solid Nord oak</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#736557] font-mono text-xs uppercase">Finish:</span>
                  <span className="font-medium text-[#392615]">Natural matte oil</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#736557] font-mono text-xs uppercase">Use:</span>
                  <span className="font-medium text-[#392615]">Indoor &amp; covered spaces</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#392615]/10">
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 px-6 rounded-full bg-[#392615] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#4d341f] transition-all cursor-pointer flex items-center justify-center gap-2 group shadow-lg"
                >
                  <span>Request Custom Quote &amp; Lead Time</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 04 Bottom Status */}
        <div className="w-full pt-12 border-t border-[#392615]/10 flex items-center justify-between text-xs text-[#736557] uppercase tracking-wider mt-12">
          <span className="font-mono font-medium text-sm text-[#392615]">04</span>
          <span className="font-medium">Project Description</span>
        </div>
      </div>
    </section>
  );
};
