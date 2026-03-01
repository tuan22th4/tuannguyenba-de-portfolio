'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, ZoomIn } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import {
	Dialog,
	DialogContent,
	DialogTrigger,
} from '@/components/ui/dialog';
import { projects } from '@/lib/constants';
import { staggerContainer, fadeInScale } from '@/lib/motion';

export function ProjectsPreview() {
	const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);
	// Only show the first 3 projects in the preview
	const previewProjects = projects.slice(0, 3);

	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4">
				<SectionHeader
					title="Featured Projects"
					description="Explore some of my recent engineering projects and technical work."
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
				>
					{previewProjects.map((project, index) => (
						<motion.div
							key={index}
							variants={fadeInScale(index * 0.1)}
							className="flex"
						>
							<Card className="flex flex-col h-full card-gradient overflow-hidden">
								<Dialog>
									<DialogTrigger asChild>
										<div
											className="relative h-48 w-full cursor-zoom-in group"
											onClick={() => setSelectedImage({ url: project.image, title: project.title })}
										>
											<Image
												src={project.image}
												alt={project.title}
												fill
												className="object-cover transition-transform duration-500 group-hover:scale-110"
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
											<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
												<ZoomIn className="text-white h-8 w-8" />
											</div>
										</div>
									</DialogTrigger>
									<DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-transparent border-none shadow-none flex items-center justify-center">
										{selectedImage && (
											<div className="relative w-full h-[80vh]">
												<Image
													src={selectedImage.url}
													alt={selectedImage.title}
													fill
													className="object-contain"
													priority
												/>
											</div>
										)}
									</DialogContent>
								</Dialog>
								<CardContent className="flex-grow p-6">
									<h3 className="font-bold text-xl mb-2">{project.title}</h3>
									<p className="text-muted-foreground mb-4">{project.description}</p>
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag, tagIndex) => (
											<Badge key={tagIndex} variant="secondary">
												{tag}
											</Badge>
										))}
									</div>
								</CardContent>
								<CardFooter className="p-6 pt-0 gap-2">
									{project.link && (
										<Button size="sm" variant="outline" asChild>
											<Link href={project.link} target="_blank" rel="noreferrer">
												<ExternalLink className="h-4 w-4 mr-2" />
												Demo
											</Link>
										</Button>
									)}
									{project.repo && (
										<Button size="sm" variant="outline" asChild>
											<Link href={project.repo} target="_blank" rel="noreferrer">
												<Github className="h-4 w-4 mr-2" />
												Repo
											</Link>
										</Button>
									)}
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</motion.div>

				<div className="flex justify-center mt-10">
					<Button asChild>
						<Link href="/projects">
							View All Projects <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}