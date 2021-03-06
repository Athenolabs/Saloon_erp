frappe.views.calendar["Appointment"] = {
	field_map: {
		"start": "starts_on",
		"end": "ends_on",
		"id": "name",
		// "allDay": "all_day",
		"title": "employee",
		"status": "status",
	},
	style_map: {
		"Open": "open",
		"Confirm": "confirm",
		"Cancel": "cancel",
		"Completed":"completed"
	},
	gantt: true,
	gantt_scale: "hours",
	filters: [
		{
			"fieldtype": "Link",
			"fieldname": "employee",
			"options": "Employee",
			"label": __("Employee")
		},
	],
	get_events_method: "erpnext.crm.doctype.appointment.appointment.get_events"
}
