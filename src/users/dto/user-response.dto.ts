export class UserResponseDto {
  id!: string;
  firstname!: string;
  lastname!: string;
  email!: string;
  phone?: string;
  avatarUrl?: string;
  timezone?: string;
  locale?: string;
  isActive!: boolean;
  createdAt!: Date;
}
