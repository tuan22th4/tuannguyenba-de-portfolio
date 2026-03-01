'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title="About Me"
					description="A passionate engineer dedicated to solving complex problems through innovative solutions."
				/>

				<div className="max-w-3xl mx-auto mt-10">


					<motion.div
						variants={fadeIn('up', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="flex flex-col"
					>
						<h3 className="text-2xl font-bold mb-4 text-left">Professional Engineer</h3>
						<p className="text-muted-foreground mb-6 text-left">
							I have a solid foundation in electronics, signal processing, and telecommunication systems, with strong programming skills and hands-on experience in digital electronics, microcontrollers, and network systems. I achieved high scores in key courses such as Programming Techniques, Basic Electronics Practice, and Microcontroller Practices.
						</p>

						<div className="grid grid-cols-2 gap-4 mb-6">
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Education</h4>
									<p className="text-sm text-muted-foreground">University of Science - VNUHCM</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Experience</h4>
									<p className="text-sm text-muted-foreground">6 Months</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Projects</h4>
									<p className="text-sm text-muted-foreground">10+ Completed</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Awards</h4>
									<p className="text-sm text-muted-foreground">0 Recognitions</p>
								</CardContent>
							</Card>
						</div>

						<Button asChild>
							<Link href="/about">
								Learn More <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}