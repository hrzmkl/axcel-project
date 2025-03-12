import React from "react";
export const metadata = {
	title: "Service de coursier - Axcel company",
}
export default function RootLayout({
									   children,
								   }: {
	children: React.ReactNode
}) {

	return (
		<>

			{children}
		</>
	)
}