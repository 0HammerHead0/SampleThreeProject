import React, {Suspense, useRef, useState, useEffect} from 'react';
import * as THREE from 'three';
import { DirectionalLightHelper } from "three";
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars,useHelper } from '@react-three/drei';
import { Box, Plane, Html} from '@react-three/drei';
import HealthBar from './components/HealthBar';

import './components/HealthBar.css';

function Experience() {
    const light = useRef();
    useHelper(light, DirectionalLightHelper, 3, "red");
    const box = useRef();
    let percentage = 100;
    const innerHealthBar = document.getElementById('innerHealthBar');
    useFrame(() => {
        percentage -= 0.1;
        innerHealthBar.style.width  = `calc((var(--widthOuterHealthBar) - 0.1rem) * ${percentage/100} )`
        if (percentage < 0) {
            percentage = 100;
        }
    });
    const [target, setTarget] = useState();
    useEffect(() => {
        if(box.current){
            setTarget(box.current);
        }
    });
    return (
        <Suspense fallback={null}>
            <Stars />
            <directionalLight
                ref={light}
                intensity={2}
                position={[2, 2, 2]}
                castShadow
                color={new THREE.Color(0xffffff)}
                target={target}
            />
            <ambientLight intensity={0.1} />
            <group>
                <Box ref={box} args={[1, 1, 1]} position={[0, 0, 0]} castShadow>
                    <meshStandardMaterial color="hotpink" />
                </Box>
                <Html
                    wrapperClass="healthBarWrapper"
                    center
                    sprite
                    transform
                    distanceFactor={15} position={[0, -2, 0]}
                >
                    <div id="outerHealthBar"></div>
                    <div id="innerHealthBar"></div>
                </Html>
            </group>
            <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
                <meshStandardMaterial color={0x0102020} attach="material"side={2} />
            </Plane>
            <OrbitControls />
        </Suspense>
    );
}

export default Experience;