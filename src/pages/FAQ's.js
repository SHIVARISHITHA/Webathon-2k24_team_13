import React from 'react'

function FAQ() {
  return (
    <div>
      <section className="bg-gray-2 rounded-xl mt-10  ">
	<div className="p-8 shadow-lg">
		<form className="space-y-4">
			<div className="w-full">
				<label className="sr-only" htmlFor="name">Name</label>
				<input className="input input-solid max-w-full" placeholder="Name" type="text" id="name" />
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div>
					<label className="sr-only" htmlFor="email">Email</label>
					<input className="input input-solid" placeholder="Email address" type="email" id="email" />
				</div>

				<div>
					<label className="sr-only" htmlFor="phone">Phone</label>
					<input className="input input-solid" placeholder="Phone Number" type="tel" id="phone" />
				</div>
			</div>

			<div className="w-full">
				<label className="sr-only" htmlFor="message">Message</label>

				<textarea className="textarea textarea-solid max-w-full" placeholder="Message" rows="8" id="message"></textarea>
			</div>

			<div className="mt-4">
				<button type="button" className="rounded-lg btn btn-primary btn-block">Send Question</button>
			</div>
		</form>
	</div>
</section>
    </div>
  )
}

export default FAQ