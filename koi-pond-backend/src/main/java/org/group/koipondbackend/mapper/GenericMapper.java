package org.group.koipondbackend.mapper;

import java.util.List;


public interface GenericMapper<E, D> {
    public abstract D toDto(E entity);
    public abstract E toEntity(D dto);
    public abstract List<D> toDto(List<E> entityList);
    public abstract List<E> toEntity(List<D> dtoList);
}
