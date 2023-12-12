import { OrderItem } from "./orderItem";
import image from "../../Assets/empty_product_banner.c076afe7.png";

const OrderTable = ({ orderItem }) => {
	return (
		<>
			{orderItem.length > 0 ? (
				<div className="mt-5 relative overflow-x-auto shadow-lg rounded-lg">
					<table
						className="w-full text-md text-left  text-dark border border-dark"
						aria-label="Order Management"
					>
						<thead className="bg-secondary uppercase text-white">
							<tr>
								<th className="py-2 px-4">Id</th>
								<th className="py-2 px-4">Name</th>
								<th className="py-2 px-4">Price</th>
								<th className="py-2 px-4">Duration</th>
								<th className="py-2 px-4">Pitch</th>
							</tr>
						</thead>
						<tbody>
							{orderItem.map((item) => (
								<OrderItem key={item.id} orderItem={item} />
							))}
						</tbody>
					</table>
				</div>
			) : (
				<div className="flex flex-col h-[78vh] p-10 justify-center items-center ">
					<img src={image} alt="" className="w-[400px] h-[400px]" />
					<p className="text-2xl text-red-400 font-bold">No order item!</p>
				</div>
			)}
		</>
	);
};

export default OrderTable;
