drop table if exists keywords cascade;
create table keywords (
	id serial primary key not null,
	keyword varchar(255) not null
)