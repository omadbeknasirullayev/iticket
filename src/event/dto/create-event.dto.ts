export class CreateEventDto {
    name: string
    start_date: Date
    start_time: string
    finish_date: Date
    finish_time: string
    info: string
    event_type_id: number
    human_category_id: number
    venue_id: number
    lang_id: number
    release_date?: Date
}
