import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'address' })
export class AddressEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'userId', nullable: false })
  userId: number;

  @Column({ name: 'complement', nullable: true })
  complement: number;

  @Column({ name: 'numberAddress', nullable: false })
  numberAddress: number;

  @Column({ name: 'cep', nullable: false })
  cep: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'city_id', nullable: false })
  typeUser: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
