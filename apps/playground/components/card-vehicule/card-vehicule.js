import { Heading } from "@vactory/ui/heading"
import { Icon } from "@vactory/ui/icon"
import { Button } from "@vactory/ui/button"

export const CardVehicule = ({
	logo,
	title,
	reference,
	vitesse,
	carburant,
	km,
	date,
	panierTitle,
	panierUrl,
	readMoreUrl,
	readMoreTitle,
}) => {
	return (
		<div className="bg-gray-50 text-gray-900 hover:text-primary-500 ease-in transition transition-all duration-300 cursor-pointer">
			<div className="h-[200px] bg-gray-200 flex items-center justify-center">
				<img src={logo} className="" />
			</div>
			<div className="p-8">
				{reference && (
					<p className="text-gray-900 text-xs leading-[21px] mb-6 px-[14px] py-1 bg-gray-300 rounded-full inline-block">
						<span>N°</span>
						{reference}
					</p>
				)}
				<Heading level={3} variant="6" className="mb-6">
					{title}
				</Heading>
				<div className="flex flex-row flex-wrap items-center gap-[28px] text-gray-500 text-sm leading-[21px] mb-[27px]">
					{vitesse && (
						<span className="inline-flex gap-[12px] items-center">
							<Icon id="vitesse" width="17" height="17" />
							{vitesse}
						</span>
					)}
					{km && (
						<span className="inline-flex gap-[12px] items-center">
							<Icon id="km" width="17" height="17" />
							{km}
						</span>
					)}
					{carburant && (
						<span className="inline-flex gap-[12px] items-center">
							<Icon id="carburant" width="17" height="17" />
							{carburant}
						</span>
					)}
					{date && (
						<span className="inline-flex gap-[12px] items-center">
							<Icon id="date" width="17" height="17" />
							{date}
						</span>
					)}
				</div>
				<div>
					<Button variant="primary" className="mb-6 w-full text-center" href={panierUrl}>
						{panierTitle}
					</Button>
					<Button variant="secondary" className="w-full text-center" href={readMoreUrl}>
						{readMoreTitle}
					</Button>
				</div>
			</div>
		</div>
	)
}
