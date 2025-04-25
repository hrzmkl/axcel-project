import React from "react";
export const metadata = {
	title: "Service de coursier - Axcel Company",
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