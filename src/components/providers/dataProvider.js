import { supabaseClient } from '../../supabaseClient';

const dataProvider = {
  // Get a list of resources
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
  
    let query = supabaseClient
      .from(resource)
      .select('*', { count: 'exact' })
      .order(field || 'id', { ascending: order === 'ASC' })
      .range((page - 1) * perPage, page * perPage - 1);
  
    // Process column-specific filters
    Object.keys(params.filter).forEach((key) => {
      const value = params.filter[key];
  
      if (value) {
        if (key.endsWith('_date')) {
          // Handle date filters (exact match)
          query = query.eq(key, value);
        } else if (key === 'number') {
          // Handle numeric fields with exact match
          query = query.eq(key, value);
        } else {
          // Handle text fields with partial matching
          query = query.ilike(key, `%${value}%`);
        }
      }
    });
  
    const { data, error, count } = await query;
  
    if (error) {
      console.error(`Error fetching list for ${resource}:`, error.message);
      throw new Error(error.message);
    }
  
    return {
      data: data.map((item) => ({ ...item, id: item.id })),
      total: count,
    };
  },
  
  
  
  
  
  
  
  

  // Get a single resource
  getOne: async (resource, params) => {
    const { data, error } = await supabaseClient
      .from(resource)
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) {
      console.error(`Error fetching one ${resource}:`, error.message);
      throw new Error(error.message);
    }

    return { data };
  },

  // Create a new resource
  create: async (resource, params) => {
    const { data, error } = await supabaseClient
      .from(resource)
      .insert(params.data)
      .select();

    if (error) {
      console.error(`Error creating ${resource}:`, error.message);
      throw new Error(error.message);
    }

    if (!data || data.length === 0) {
      throw new Error(`No data returned after creating ${resource}`);
    }

    return { data: data[0] };
  },

  // Update an existing resource
  update: async (resource, params) => {
    console.log('Updating resource:', resource);
    console.log('Params:', params);
  
    const { data, error } = await supabaseClient
      .from(resource)
      .update(params.data)
      .eq('id', params.id)
      .select();
  
    if (error) {
      console.error(`Error updating ${resource}:`, error.message);
      throw new Error(error.message);
    }
  
    if (!data || data.length === 0) {
      console.warn(`No matching record found to update for ${resource} with id ${params.id}`);
      throw new Error(`No data returned after updating ${resource}`);
    }
  
    console.log('--------------------- Supabase Response:', data);
  
    return { data: data[0] };
  },
  
  

  // Delete a single resource
  delete: async (resource, params) => {
    const { data, error } = await supabaseClient
      .from(resource)
      .delete()
      .eq('id', params.id)
      .select();

    if (error) {
      console.error(`Error deleting ${resource}:`, error.message);
      throw new Error(error.message);
    }

    if (!data || data.length === 0) {
      throw new Error(`No data returned after deleting ${resource}`);
    }

    return { data: data[0] };
  },

  // Delete multiple resources (bulk delete)
  deleteMany: async (resource, params) => {
    const { data, error } = await supabaseClient
      .from(resource)
      .delete()
      .in('id', params.ids) // Deletes all rows where 'id' is in the list of IDs
      .select();

    if (error) {
      console.error(`Error deleting many ${resource}:`, error.message);
      throw new Error(error.message);
    }

    return { data: params.ids }; // Return the list of deleted IDs
  },

  // Fetch multiple resources by IDs
getMany: async (resource, params) => {
  const { data, error } = await supabaseClient
    .from(resource)
    .select('*')
    .in('id', params.ids); // Fetch records where 'id' is in the list of IDs

  if (error) {
    console.error(`Error fetching many ${resource}:`, error.message);
    throw new Error(error.message);
  }

  return { data: data.map((item) => ({ ...item, id: item.id })) }; // Ensure records have 'id' field
},

// Fetch related resources by reference ID
getManyReference: async (resource, params) => {
  const { page, perPage } = params.pagination;
  const { field, order } = params.sort;

  const { data, error, count } = await supabaseClient
    .from(resource)
    .select('*', { count: 'exact' })
    .eq(params.target, params.id) // Match the foreign key
    .order(field || 'id', { ascending: order === 'ASC' })
    .range((page - 1) * perPage, page * perPage - 1);

  if (error) {
    console.error(`Error fetching many references for ${resource}:`, error.message);
    throw new Error(error.message);
  }

  return {
    data: data.map((item) => ({ ...item, id: item.id })),
    total: count,
  };
},

};


export default dataProvider;
