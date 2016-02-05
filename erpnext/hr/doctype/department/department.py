# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# License: GNU General Public License v3. See license.txt

from __future__ import unicode_literals
import frappe

from frappe.model.document import Document

class Department(Document):
	def autoname(self):
		# self.name = self.department_name + '-' + self.company
		self.name = self.department_name