import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { EventType } from "src/event_type/entities/event_type.entity";
import { HumanCategory } from "src/human_category/entities/human_category.entity";
import { Language } from "src/languages/entities/language.entity";
import { Venue } from "src/venue/entities/venue.entity";

@Table({tableName: 'events'})
export class Event extends Model<Event> {
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number

    @Column({
        type: DataType.STRING
    })
    name: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    photo: string

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    start_date: Date

    @Column({
        type: DataType.TIME,
        allowNull: false
    })
    start_time: string

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    finish_date: Date

    @Column({
        type: DataType.TIME,
        allowNull: false
    })
    finish_time: string

    @Column({
        type: DataType.STRING
    })
    info: string

    @ForeignKey(() => EventType)
    @Column({
        type: DataType.BIGINT,
        allowNull: false
    })
    event_type_id: number

    @BelongsTo(() => EventType)
    event_type: EventType

    @ForeignKey(() => HumanCategory)
    @Column({
        type: DataType.BIGINT,
        allowNull: false
    })
    human_category_id: number

    @BelongsTo(() => HumanCategory)
    human_category: HumanCategory

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.BIGINT,
        allowNull: false
    })
    venue_id: number

    @BelongsTo(() => Venue)
    venue: Venue

    @ForeignKey(() => Language)
    @Column({
        type: DataType.SMALLINT,
        allowNull: false
    })
    lang_id: number

    @BelongsTo(() => Language)
    language: Language
    
    @Column({
        type: DataType.DATE
    })
    release_date: Date
}
