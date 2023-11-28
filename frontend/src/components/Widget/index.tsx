import { Icon } from "../Icon";
import { WidgetProps, WidgetVariants } from "./Widget.interface";
import styles from "./Widget.module.scss"
import { WidgetGrowthVariant } from "./components/WidgetGrowthVariant";
import { WidgetValueVariant } from "./components/WidgetValueVariant";

export const Widget = ({ icon, title, variant }: WidgetProps) => {
  const Variant = (() => {
    switch(variant.name) {
      case "value":
        return <WidgetValueVariant {...variant.props} />;
      case "growth":
        return <WidgetGrowthVariant {...variant.props} />;
      default:
        return null;
    }
  })();

  return (
    <section className={styles.container}>
      <header>
        {!!icon && (
          <div className={styles.iconContainer}>
            <Icon icon={icon} color="primary-main" size="20" />
          </div>
        )}

        <p className="lg semibold">{title}</p>
      </header>

      {Variant}
    </section>
  )
}