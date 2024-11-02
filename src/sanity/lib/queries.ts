export const STARTUP_QUERY = `
    *[_type == "startup" && defined(slug.current)]{
        _id,
        title,
        slug,
        _createdAt,
        views,
        author->{_id, bio, name},
        category,
        description,
        image,
    }
`;

export const STARTUP_QUERY_BY_ID = `
    *[_type == "startup" && defined(slug.current)]{
        _id,
        title,
        slug,
        _createdAt,
        views,
        author->{_id, bio, name},
        category,
        description,
        image,
    }
`;
