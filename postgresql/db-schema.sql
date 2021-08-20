-- Table: public.task

-- DROP TABLE public.task;

CREATE TABLE IF NOT EXISTS public.task
(
    _id integer NOT NULL DEFAULT nextval('task__id_seq'::regclass),
    description text COLLATE pg_catalog."default",
    duedate date,
    done boolean,
    hide boolean,
    CONSTRAINT task_pkey PRIMARY KEY (_id)
)

TABLESPACE pg_default;

ALTER TABLE public.task
    OWNER to postgres;