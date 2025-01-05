package difabelzone.backend.services;

import difabelzone.backend.payloads.CategoryDTO;
import difabelzone.backend.payloads.CategoryResponse;

public interface CategoryService {

    CategoryResponse getAllCategories(Integer pageNumber, Integer pageSize, String sortBy, String sortOrder);
    CategoryDTO createCategories(CategoryDTO categoryDTO);
    CategoryDTO deleteCategories(Long categoryId);

    CategoryDTO updateCategories(CategoryDTO categoryDTO, Long categoryId);
}
