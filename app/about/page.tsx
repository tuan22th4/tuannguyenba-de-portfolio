'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>
						<p className="text-lg text-muted-foreground">
							I have a solid foundation in electronics, signal processing, and telecommunication systems, with strong programming skills and hands-on experience in digital electronics, microcontrollers, and network systems. I achieved high scores in key courses such as Programming Techniques, Basic Electronics Practice, and Microcontroller Practices, and completed advanced subjects including Digital Signal Processing and Wireless Communication.
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							My passion lies in the intersection of hardware and software. I began by mastering the fundamentals of electronics and signal processing, achieving top marks in practical courses like Microcontroller Practices. As I progressed, I expanded my scope to include advanced wireless communication and network systems. My journey isn't just technical; I've actively integrated entrepreneurship and critical thinking into my learning process, preparing me to tackle real-world challenges with a comprehensive perspective.
						</div>
						<Button className="mt-6" asChild>
							<a href="/cv.pdf" download="TuanNguyenBa_CV.pdf">
								Download CV <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[500px]">
						<Image
							src="/profile.png"
							alt="Tuan Nguyen Ba"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									University of Science - VNUHCM. Achieved high scores in Programming Techniques, Basic Electronics Practice, and Microcontroller Practices.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									6 months of hands-on experience in digital electronics, microcontrollers, and network systems, including participation in technical workshops.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
									Electronics, Signal Processing, Telecommunication Systems, Programming, and Embedded Systems.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}