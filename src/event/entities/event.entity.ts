import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { EventType } from "src/event_type/entities/event_type.entity";
import { HumanCategory } from "src/human_category/entities/human_category.entity";
import { Language } from "src/languages/entities/language.entity";
import { Venue } from "src/venue/entities/venue.entity";

@Table({tableName: 'events'})
export class Event extends Model<Event> {
    @ApiProperty({example: 1, description: "Unical ID"})
    @Column({
        type: DataType.BIGINT,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number

    @ApiProperty({example: "Opera", description: "Event's name"})
    @Column({
        type: DataType.STRING
    })
    name: string

    @ApiProperty({example: "Url name", description: "Event's photo url name"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    photo: string

    @ApiProperty({example: "13.12.2022", description: "Event's start date"})
    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    start_date: Date

    @ApiProperty({example: "15:00", description: "Event's start time"})

    @Column({
        type: DataType.TIME,
        allowNull: false
    })
    start_time: string

    @ApiProperty({example: "16.12.2022", description: "Event's finished date"})
    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    finish_date: Date

    @ApiProperty({example: "16:00", description: "Event's finished time"})
    @Column({
        type: DataType.TIME,
        allowNull: false
    })
    finish_time: string

    @ApiProperty({example: "text about", description: "Event's info"})
    @Column({
        type: DataType.STRING
    })
    info: string

    @ApiProperty({example: "2", description: "Event type id, connection with event_type table"})
    @ForeignKey(() => EventType)
    @Column({
        type: DataType.BIGINT,
        allowNull: false
    })
    event_type_id: number

    @BelongsTo(() => EventType)
    event_type: EventType

    @ApiProperty({example: "3", description: "Human category id, connection with human_category table"})
    @ForeignKey(() => HumanCategory)
    @Column({
        type: DataType.BIGINT,
        allowNull: false
    })
    human_category_id: number

    @BelongsTo(() => HumanCategory)
    human_category: HumanCategory

    @ApiProperty({example: "2", description: "Venue id, connection with venue table"})
    @ForeignKey(() => Venue)
    @Column({
        type: DataType.BIGINT,
        allowNull: false
    })
    venue_id: number

    @BelongsTo(() => Venue)
    venue: Venue

    @ApiProperty({example: "2", description: "Language id, connection with language table"})
    @ForeignKey(() => Language)
    @Column({
        type: DataType.SMALLINT,
        allowNull: false
    })
    lang_id: number

    @BelongsTo(() => Language)
    language: Language
    
    @ApiProperty({example: "20.10.2021", description: "Event release date"})
    @Column({
        type: DataType.DATE
    })
    release_date: Date
}
