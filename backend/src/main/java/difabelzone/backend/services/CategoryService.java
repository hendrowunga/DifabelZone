package difabelzone.backend.services;

import difabelzone.backend.models.Category;

import java.util.List;


public interface CategoryService {

    List<Category> getAllCategories();
    void createCategories(Category category);
    String deleteCategory(Long categoryId);
}
