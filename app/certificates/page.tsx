'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { certificates } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function CertificatesPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Certificates</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Professional certifications and achievements that demonstrate my expertise
							and commitment to continuous learning.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{certificates.map((cert, index) => (
							<motion.div
								key={index}
								variants={fadeIn('up', 0.2 * index)}
							>
								<Card className="card-gradient overflow-hidden">
									<CardContent className="p-0">
										<div className="flex flex-col">
											{cert.image && (
												<Dialog>
													<DialogTrigger asChild>
														<div className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer group">
															<img
																src={cert.image}
																alt={cert.title}
																className="h-full w-full object-cover transition-transform group-hover:scale-105"
															/>
															<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
																<span className="text-white text-sm font-medium border border-white/40 px-3 py-1 rounded-full backdrop-blur-sm">
																	View Full
																</span>
															</div>
														</div>
													</DialogTrigger>
													<DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden border-none bg-transparent shadow-2xl">
														<div className="relative bg-background rounded-lg overflow-hidden">
															<DialogHeader className="p-4 border-b">
																<DialogTitle>{cert.title}</DialogTitle>
															</DialogHeader>
															<div className="p-1">
																<img
																	src={cert.image}
																	alt={cert.title}
																	className="w-full h-auto max-h-[80vh] object-contain mx-auto"
																/>
															</div>
															<div className="p-4 bg-muted/30 text-center text-sm text-muted-foreground">
																{cert.issuer} • {cert.date}
															</div>
														</div>
													</DialogContent>
												</Dialog>
											)}
											<div className="p-6">
												<div className="flex items-start gap-4">
													{!cert.image && <Award className="h-8 w-8 text-primary shrink-0" />}
													<div>
														<h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
														<p className="text-muted-foreground">{cert.issuer}</p>
														<p className="text-sm text-muted-foreground mt-2">
															Issued: {cert.date}
														</p>
														{cert.id && (
															<p className="text-sm text-muted-foreground">
																{cert.id.includes('Nguyen') ? 'Student: ' : 'Certificate ID: '}
																{cert.id}
															</p>
														)}
													</div>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}