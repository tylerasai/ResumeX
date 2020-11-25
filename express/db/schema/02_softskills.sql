drop table if exists softskills cascade;
create table softskills (
	id serial primary key not null,
	keyword varchar(255) not null
)