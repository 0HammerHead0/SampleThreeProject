import React, {useRef} from 'react';
import * as THREE from 'three';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Box, Plane, Html} from '@react-three/drei';
import HealthBar from './components/HealthBar';

import './components/HealthBar.css';

function Experience() {
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
    return (
        < >
            <Stars />
            <directionalLight
                intensity={0.5}
                position={[5, 5, 5]}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <group>
                <Box ref={box} args={[1, 1, 1]} position={[0, 0, 0]} castShadow>
                    <meshBasicMaterial color="hotpink" />
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
                <meshBasicMaterial color={0x0102020} attach="material" opacity={0.3} side={2} />
            </Plane>
            <OrbitControls />
        </>
    );
}

export default Experience;