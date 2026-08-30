export const clientInquiryEmail = ({ fullName, email, phone, studyLevel, destination, budget, message }: { fullName: string; email: string; phone: string; studyLevel: string; destination: string; budget: string; message: string }) => `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>New Consultation Request</title>
</head>

<body style="
	margin: 0;
	padding: 0;
	background-color: #f4f5f7;
	font-family: Arial, Helvetica, sans-serif;
	color: #1f2937;
">

	<table
		width="100%"
		cellpadding="0"
		cellspacing="0"
		border="0"
		style="background-color: #f4f5f7;"
	>
		<tr>
			<td align="center" style="padding: 40px 20px;">

				<table
					width="100%"
					cellpadding="0"
					cellspacing="0"
					border="0"
					style="
						max-width: 650px;
						background-color: #ffffff;
						border-radius: 10px;
						overflow: hidden;
					"
				>

					<!-- Header -->
					<tr>
						<td style="
							padding: 30px;
							background-color: #111827;
							color: #ffffff;
						">
							<h1 style="
								margin: 0 0 8px;
								font-size: 24px;
								font-weight: 600;
							">
								New Consultation Request
							</h1>

							<p style="
								margin: 0;
								font-size: 14px;
								color: #d1d5db;
							">
								A new request has been submitted through your website.
							</p>
						</td>
					</tr>

					<!-- Content -->
					<tr>
						<td style="padding: 30px;">

							<h2 style="
								margin: 0 0 18px;
								font-size: 18px;
								color: #111827;
							">
								Contact Information
							</h2>

							<table
								width="100%"
								cellpadding="0"
								cellspacing="0"
								border="0"
								style="
									border: 1px solid #e5e7eb;
									border-radius: 8px;
									overflow: hidden;
									margin-bottom: 30px;
								"
							>
								<tr>
									<td style="
										padding: 14px 16px;
										border-bottom: 1px solid #e5e7eb;
										width: 35%;
										font-size: 14px;
										font-weight: 600;
										color: #6b7280;
									">
										Full Name
									</td>

									<td style="
										padding: 14px 16px;
										border-bottom: 1px solid #e5e7eb;
										font-size: 14px;
									">
										${fullName}
									</td>
								</tr>

								<tr>
									<td style="
										padding: 14px 16px;
										border-bottom: 1px solid #e5e7eb;
										font-size: 14px;
										font-weight: 600;
										color: #6b7280;
									">
										Email
									</td>

									<td style="
										padding: 14px 16px;
										border-bottom: 1px solid #e5e7eb;
										font-size: 14px;
									">
										<a
											href="mailto:${email}"
											style="color: #2563eb; text-decoration: none;"
										>
											${email}
										</a>
									</td>
								</tr>

								<tr>
									<td style="
										padding: 14px 16px;
										font-size: 14px;
										font-weight: 600;
										color: #6b7280;
									">
										Phone
									</td>

									<td style="
										padding: 14px 16px;
										font-size: 14px;
									">
										${phone}
									</td>
								</tr>
							</table>


							<h2 style="
								margin: 0 0 18px;
								font-size: 18px;
								color: #111827;
							">
								Study & Destination Details
							</h2>

							<table
								width="100%"
								cellpadding="0"
								cellspacing="0"
								border="0"
								style="
									border: 1px solid #e5e7eb;
									border-radius: 8px;
									overflow: hidden;
									margin-bottom: 30px;
								"
							>
								<tr>
									<td style="
										padding: 14px 16px;
										border-bottom: 1px solid #e5e7eb;
										width: 35%;
										font-size: 14px;
										font-weight: 600;
										color: #6b7280;
									">
										Study Level
									</td>

									<td style="
										padding: 14px 16px;
										border-bottom: 1px solid #e5e7eb;
										font-size: 14px;
									">
										${studyLevel}
									</td>
								</tr>

								<tr>
									<td style="
										padding: 14px 16px;
										border-bottom: 1px solid #e5e7eb;
										font-size: 14px;
										font-weight: 600;
										color: #6b7280;
									">
										Destination
									</td>

									<td style="
										padding: 14px 16px;
										border-bottom: 1px solid #e5e7eb;
										font-size: 14px;
									">
										${destination}
									</td>
								</tr>

								<tr>
									<td style="
										padding: 14px 16px;
										font-size: 14px;
										font-weight: 600;
										color: #6b7280;
									">
										Budget
									</td>

									<td style="
										padding: 14px 16px;
										font-size: 14px;
									">
										${budget}
									</td>
								</tr>
							</table>


							<h2 style="
								margin: 0 0 18px;
								font-size: 18px;
								color: #111827;
							">
								Message
							</h2>

							<div style="
								padding: 18px;
								background-color: #f9fafb;
								border: 1px solid #e5e7eb;
								border-radius: 8px;
								margin-bottom: 30px;
							">
								<p style="
									margin: 0;
									font-size: 15px;
									line-height: 1.7;
									white-space: pre-line;
									color: #374151;
								">
									${message}
								</p>
							</div>


							<!-- Reply button -->
							<table
								cellpadding="0"
								cellspacing="0"
								border="0"
							>
								<tr>
									<td style="
										border-radius: 6px;
										background-color: #111827;
									">
										<a
											href="mailto:${email}"
											style="
												display: inline-block;
												padding: 13px 22px;
												color: #ffffff;
												text-decoration: none;
												font-size: 14px;
												font-weight: 600;
											"
										>
											Reply to ${fullName}
										</a>
									</td>
								</tr>
							</table>

						</td>
					</tr>

					<!-- Footer -->
					<tr>
						<td style="
							padding: 20px 30px;
							background-color: #f9fafb;
							border-top: 1px solid #e5e7eb;
						">
							<p style="
								margin: 0;
								font-size: 12px;
								line-height: 1.5;
								color: #9ca3af;
							">
								This email was automatically generated from your website
								contact form.
							</p>
						</td>
					</tr>

				</table>

			</td>
		</tr>
	</table>

</body>
</html>
`;
