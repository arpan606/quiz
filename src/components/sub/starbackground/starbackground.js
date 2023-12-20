import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import React, { Suspense, useRef, useState } from "react";
import './starbackground.scss';

const Starbackground = (props) => {
    const ref = useRef();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.2 })
    );
    let toggle = false;
    useFrame((state, delta) => {
        if (toggle) {
            ref.current.rotation.z += delta / props.rotationFactor2;
        } else {
            ref.current.rotation.z -= delta / props.rotationFactor1;
        }
        ref.current.rotation.x -= delta / props.rotationFactor1;
        ref.current.rotation.y -= delta / props.rotationFactor2;
    })


    return (
        <group rotation={[0, 0, Math.PI / 4]} >
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color={props.color}
                    size={0.006}
                    sizeAttenuation={true}
                    dethWrite={false}
                />
            </Points>
        </group>
    )
}

const StarsCanvas = () => (
    <div className="starbackground-container">
        <Canvas camera={{ position: [0, 0, 1] }} className="stars">
            <Suspense fallback={null}>
                <Starbackground color="white" rotationFactor1="10" rotationFactor2="15"/>
                <Starbackground color="#394361"  rotationFactor1="30" rotationFactor2="10"/>
            </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas;