import { computed } from "vue";
import { useI18n } from "vue-i18n";
import type { Category, ProcessStep } from "@/types";

export function useTranslatedData() {
  const { t } = useI18n();

  const categories = computed<Category[]>(() => [
    {
      id: "all",
      name: t("gallery.categories.all"),
      description: t("gallery.categories.all"),
    },
    {
      id: "fabric",
      name: t("gallery.categories.fabric"),
      description: t("gallery.categories.fabric"),
    },
    {
      id: "fashion",
      name: t("gallery.categories.fashion"),
      description: t("gallery.categories.fashion"),
    },
    {
      id: "home",
      name: t("gallery.categories.home"),
      description: t("gallery.categories.home"),
    },
    {
      id: "partnership",
      name: t("gallery.categories.partnership"),
      description: t("gallery.categories.partnership"),
    },
  ]);

  const processSteps = computed<ProcessStep[]>(() => [
    {
      id: "persiapan-benang",
      title: t("gallery.process.steps.preparation.title"),
      description: t("gallery.process.steps.preparation.description"),
      order: 1,
    },
    {
      id: "ikat-celup",
      title: t("gallery.process.steps.dyeing.title"),
      description: t("gallery.process.steps.dyeing.description"),
      order: 2,
    },
    {
      id: "penenunan",
      title: t("gallery.process.steps.weaving.title"),
      description: t("gallery.process.steps.weaving.description"),
      order: 3,
    },
    {
      id: "finishing",
      title: t("gallery.process.steps.finishing.title"),
      description: t("gallery.process.steps.finishing.description"),
      order: 4,
    },
  ]);

  return {
    categories,
    processSteps,
  };
}
