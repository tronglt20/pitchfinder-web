import CustomerItem from "./customerItem";
import image from "../../Assets/empty_product_banner.c076afe7.png";

const CustomerTable = ({ customerItem }) => {
	return (
		<>
			{customerItem.length > 0 ? (
				<div className="mt-5 relative overflow-x-auto shadow-lg rounded-lg">
					<table
						className="w-full text-md text-left  text-dark border border-dark"
						aria-label="Customer Management"
					>
						<thead className="bg-secondary uppercase text-white">
							<tr>
								<th className="py-2 px-4">Id</th>
								<th className="py-2 px-4">Name</th>
								<th className="py-2 px-4">Phone Number</th>
								<th className="py-2 px-4">Number of order</th>
							</tr>
						</thead>
						<tbody>
							{customerItem.map((item) => (
								<CustomerItem key={item.id} customerItem={item} />
							))}
						</tbody>
					</table>
				</div>
			) : (
				<div className="flex flex-col h-[78vh] p-10 justify-center items-center ">
					<img src={image} alt="" className="w-[400px] h-[400px]" />
					<p className="text-2xl text-red-400 font-bold">No customer :(</p>
				</div>
			)}
		</>
	);
};

export default CustomerTable;
