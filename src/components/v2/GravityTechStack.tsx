"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { portfolioData } from "@/data/portfolio";

export function GravityTechStack() {
  const containerRef = useRef<HTMLDivElement>(null);


  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-zinc-950">
       <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white/10 font-mono tracking-widest uppercase">
                Tech Drop
            </h2>
       </div>
       <PhysicsCanvas />
    </div>
  );
}

function PhysicsCanvas() {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine>(null);
    
    const [items, setItems] = useState<{body: Matter.Body, width: number, height: number, text: string}[]>([]);
    const [positions, setPositions] = useState<{[key: string]: {x: number, y: number, angle: number}}>({});

    useEffect(() => {
        if (!sceneRef.current) return;

        const Engine = Matter.Engine,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint;

        const engine = Engine.create();
        engineRef.current = engine;
        const world = engine.world;

        const width = sceneRef.current.clientWidth;
        const height = sceneRef.current.clientHeight;

        // Boundaries
        const ground = Bodies.rectangle(width / 2, height + 60, width, 120, { 
            isStatic: true,
            render: { visible: false }
        });
        const leftWall = Bodies.rectangle(-60, height / 2, 120, height * 4, { 
            isStatic: true,
            render: { visible: false }
        });
        const rightWall = Bodies.rectangle(width + 60, height / 2, 120, height * 4, { 
            isStatic: true,
            render: { visible: false }
        });

        Composite.add(world, [ground, leftWall, rightWall]);

        // Skills Bodies
        const skillBodies = portfolioData.skills.map((skill) => {
            const bodyWidth = skill.length * 15 + 40; // Approx based on font
            const bodyHeight = 50;
            const x = Math.random() * (width - 100) + 50;
            const y = -Math.random() * 500 - 100;
             return {
                body: Bodies.rectangle(x, y, bodyWidth, bodyHeight, {
                    restitution: 0.8,
                    friction: 0.3,
                    density: 0.04,
                    chamfer: { radius: 25 },
                    label: skill
                }),
                width: bodyWidth,
                height: bodyHeight,
                text: skill
            };
        });

        Composite.add(world, skillBodies.map(s => s.body));
        setItems(skillBodies);

        // Runner
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Mouse interaction
        const mouse = Mouse.create(sceneRef.current);
        // Fix pixel sizing for retina displays

        mouse.pixelRatio = window.devicePixelRatio || 1;
        
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        Composite.add(world, mouseConstraint);

        // Animation Loop
        let frameId: number;
        const update = () => {
            if (!engineRef.current) return;
            
            const newPositions: Record<string, {x: number, y: number, angle: number}> = {};
            skillBodies.forEach(item => {
                const { x, y } = item.body.position;
                newPositions[item.text] = { x, y, angle: item.body.angle };
            });
            setPositions(newPositions);
            
            frameId = requestAnimationFrame(update);
        };
        
        frameId = requestAnimationFrame(update);

        return () => {
            Runner.stop(runner);
            Engine.clear(engine);
            Composite.clear(world, false, true);
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div ref={sceneRef} className="w-full h-full relative cursor-grab active:cursor-grabbing">
            {items.map((item, i) => {
                const pos = positions[item.text];
                if (!pos) return null;
                
                return (
                    <div
                        key={i}
                        className="absolute flex items-center justify-center bg-zinc-900 border border-zinc-700 text-zinc-300 font-mono text-sm rounded-full shadow-lg select-none hover:border-cyan-500 hover:text-cyan-400 transition-colors duration-300"
                        style={{
                            width: item.width,
                            height: item.height,
                            transform: `translate(${pos.x - item.width / 2}px, ${pos.y - item.height / 2}px) rotate(${pos.angle}rad)`,
                            willChange: "transform"
                        }}
                    >
                        {item.text}
                    </div>
                );
            })}
        </div>
    );
}
