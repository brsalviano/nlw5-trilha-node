import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column } from "typeorm"

import {v4 as uuid } from "uuid"

@Entity("settings")
class Setting {

    @PrimaryColumn()
    id: string

    @Column()
    username: string

    @Column()
    chat: boolean

    @UpdateDateColumn()
    updated_at: Date

    @CreateDateColumn()
    created_at: Date

    constructor() {
        //Só geramos o uuid se não estiver preenchido
        //pois se já estiver preenchido é porque provavelmente
        //estamos atualizando.
        if(!this.id) {
            this.id = uuid()
        }
    }
}

export { Setting }