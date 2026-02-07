'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown } from 'lucide-react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer } from '@/lib/motion';

export function HeroSection() {
	const [vantaEffect, setVantaEffect] = useState<any>(null);
	const vantaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!vantaEffect && vantaRef.current) {
			setVantaEffect(
				NET({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.00,
					minWidth: 200.00,
					scale: 0.8,
					scaleMobile: 0.8,
					color: 0xff3f81,
					backgroundColor: 0x23153c,
					points: 10.00,
					maxDistance: 15.00,
					spacing: 20.00,
					showDots: false,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<section className="relative overflow-hidden">
			{/* Vanta.js Background */}
			<div ref={vantaRef} className="absolute inset-0 z-0 opacity-60" />

			{/* Content */}
			<div className="container relative z-10 px-4 py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh]">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-3xl mx-auto text-center"
				>

					<motion.h1
						variants={fadeIn('up', 0.3)}
						className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
					>
						<span className="text-gradient">Tuan Nguyen Ba's</span> Portfolio
					</motion.h1>

					<motion.p
						variants={fadeIn('up', 0.5)}
						className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
					>
						A showcase of my projects, skills, and achievements in the field of engineering.
					</motion.p>

					<motion.div
						variants={fadeIn('up', 0.7)}
						className="mt-10 flex flex-wrap gap-4 justify-center"
					>
						<Button size="lg" asChild>
							<a href="https://github.com/tuan22th4" target="_blank" rel="noopener noreferrer">
								View Projects <ArrowRight className="ml-2 h-4 w-4" />
							</a>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<a href="/cv.pdf" download="TuanNguyenBa_CV.pdf">
								Download CV <FileDown className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>
				</motion.div>
			</div>

			{/* Bottom gradient */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
		</section>
	);
}