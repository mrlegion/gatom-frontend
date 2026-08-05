class DateFormater {
	public withHourMinute(dateAsString: string) {
		const date = new Date(dateAsString)
		const formatDate = new Intl.DateTimeFormat('ru-RU', {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		}).format(date)

		return formatDate
	}
}

export const dateFormater = new DateFormater()
